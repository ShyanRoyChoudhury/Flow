function Navbar() {
  return (
    <div className="w-full font-bold p-4 text-lg flex justify-between">
      <div>SalesBlink</div>
      <div>
        <ProfileSVG />
      </div>
    </div>
  );
}

function ProfileSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  );
}
export default Navbar;
