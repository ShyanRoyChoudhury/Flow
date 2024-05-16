// import Modal from "@/Modals/modal";

interface ModalBaseViewProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

// function ModalBaseView({ title, description, children }: ModalBaseViewProps) {
//   return (
//     <div className=" w-full">
//       <div className="mx-auto py-4 w-full border-b">
//         <div className="text-lg font-black text-gray-800 flex items-center space-x-1 ">
//           <div className="font-bold text-xl">{title}</div>
//           {/* <div>
//             <QuestionSVG />
//           </div> */}
//         </div>
//         <p className="text-sm text-gray-500">
//           {/* Click on a block to configure and add it in sequence. */}
//           {description}
//         </p>
//       </div>
//       {/* <div className="flex gap-4 py-4 px-2">
//         <div>
//           <div>
//             <div className="font-bold text-xl">Outreach</div>
//             <div></div>
//           </div>
//           <div>Conditions</div>
//         </div>
//       </div> */}
//       {children}
//     </div>
//   );
// }

function QuestionSVG() {
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
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
      <line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>
  );
}

// //test code here

function ModalBaseView({ title, description, children }: ModalBaseViewProps) {
  return (
    <div className=" w-full">
      <div className="mx-auto py-4 w-full border-b">
        <div className="text-lg font-black text-gray-800 flex items-center space-x-1 ">
          <div className="font-bold text-xl">{title}</div>
          <div>
            <QuestionSVG />
          </div>
        </div>
        <p className="text-sm text-gray-500">
          {/* Click on a block to configure and add it in sequence. */}
          {description}
        </p>
      </div>
      {children}
    </div>
  );
}

export default ModalBaseView;
