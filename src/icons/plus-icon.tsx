/**
 * ### Plus Icon ###
 * @description This icon can render plus svg.
 * @returns Plus svg icon
 * @example
 * <PlusIcon />
 * @version 1.0.0
 * @author Wunna
 */
const PlusIcon = () => {
  return (
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
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
};

export default PlusIcon;
