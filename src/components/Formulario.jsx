import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Formulario = ({ children, setIsLoading, templateVersionForm = "" }) => {
  const navigate = useNavigate();
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    if (!form.current) {
      return toast.error("¡Llena los espacios en blanco!");
    }

    // Asigna el valor de la URL antes de enviar el formulario
    const fromUrlInput = form.current.querySelector('input[name="from_url"]');
    if (fromUrlInput) {
      fromUrlInput.value = window.location.href;
    }

    try {
      emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        templateVersionForm,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );
      navigate("/correo-enviado-exitosamente");
      console.log("SUCCESS!");
    } catch (error) {
      console.log("FAILED...", error?.text);
      toast.error(error?.text || error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form ref={form} onSubmit={handleSubmit} className="space-y-3">
      {/* Hidden input to capture the url */}
      <input type="hidden" name="from_url" value="" />
      {children}
    </form>
  );
};

export default Formulario;
