import emailjs from "@emailjs/browser";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Formulario = ({ children, setIsLoading }) => {
  const navigate = useNavigate();
  const form = useRef();

  // We make the url appears in a hidden input
  useEffect(() => {
    if (form.current) {
      form.current.querySelector('input[name="from_url"]').value =
        window.location.href;
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    if (!form.current) {
      return toast.error("¡Llena los espacios en blanco!");
    }

    try {
      emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );
      navigate("/correo-enviado-exitosamente");
      console.log("SUCCESS!");
    } catch (error) {
      console.log("FAILED...", error?.text);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form ref={form} onSubmit={handleSubmit} className="space-y-5">
      {/* Hidden input to capture the url */}
      <input type="hidden" name="from_url" value="" />
      {children}
    </form>
  );
};

export default Formulario;
