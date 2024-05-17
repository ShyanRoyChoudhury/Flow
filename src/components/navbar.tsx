import { ProfileSVG } from "@/SVGs/SVG";

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

export default Navbar;
