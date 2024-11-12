import "rsuite/Dropdown/styles/index.css";
import { Link } from "react-router-dom";
import Dropdown from "rsuite/Dropdown";

const NestedNavbarDropdown = ({
  setNavbarOpen,
  subdropdownOne,
  subdropdownTwo,
  dropdownTitle,
}) => {
  return (
    <Dropdown
      toggleClassName={"navbar-nested-dropdown"}
      menuStyle={{ background: "#E21E31", paddingBlock: 0 }}
      noCaret={true}
      title={
        <div className="flex justify-between gap-3 w-full">
          <div>{dropdownTitle}</div>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
      }
    >
      <Dropdown.Menu
        style={{ background: "#E21E31", color: "#FFFFFF", paddingBlock: 0 }}
        title={subdropdownOne?.title}
      >
        {subdropdownOne?.dropdownLinks?.map((dropdownLink, index) => (
          <Link
            onClick={() => setNavbarOpen(false)}
            className="dropdown-link-nav"
            to={dropdownLink?.to}
            key={index}
          >
            <Dropdown.Item style={{ color: "#FFFFFF" }}>
              {dropdownLink?.text}
            </Dropdown.Item>
          </Link>
        ))}
      </Dropdown.Menu>

      <Dropdown.Menu
        style={{ background: "#E21E31", color: "#FFFFFF", paddingBlock: 0 }}
        title={subdropdownTwo?.title}
      >
        {subdropdownTwo?.dropdownLinks?.map((dropdownLink, index) => (
          <Link
            onClick={() => setNavbarOpen(false)}
            className="dropdown-link-nav"
            to={dropdownLink?.to}
            key={index}
          >
            <Dropdown.Item style={{ color: "#FFFFFF" }}>
              {dropdownLink?.text}
            </Dropdown.Item>
          </Link>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};
export default NestedNavbarDropdown;
