import BlockSelector from "@/components/BlockSelector";
import { sourceBlockViews } from "@/nodes";
import modalBlockSelected from "@/store/modalBlockSelected";
import ModalLeadsFromLists from "@/views/ModalLeadsFromLists";
// import ModalBaseView from "@/views/ModalBaseViewPage";
import { useRecoilValue } from "recoil";

function LeadSourceModal() {
  const blockSelected = useRecoilValue(modalBlockSelected);
  // Function to handle block selection

  //   Render the selected block component
  const renderSelectedBlockComponent = () => {
    switch (blockSelected?.title) {
      case "Leads from List(s)":
        return <ModalLeadsFromLists />;
      case "Segment by Events":
        return <ComponentForSegmentByEvents />;
      case "Segment of List":
        return <ComponentForSegmentOfList />;
      case "Lead from CRM Integration":
        return <ComponentForLeadFromCRMIntegration />;
      default:
        return null;
    }
  };

  return (
    <div className=" w-full">
      <div className="mx-auto py-4 w-full border-b">
        <div className="text-lg font-black text-gray-800 flex items-center space-x-1 ">
          <div className="font-bold text-xl">Add a Source Block</div>
          <div>
            <QuestionSVG />
          </div>
        </div>
        <p className="text-sm text-gray-500">
          {/* Click on a block to configure and add it in sequence. */}
          Pick a block & configure, any new leads that match rules will be added
          to sequence automatically.
        </p>
      </div>

      <div className="flex gap-4 py-4 px-2 h-full overflow-scroll">
        <div className="overflow-y-auto">
          <div>
            <div className="font-bold text-xl">Sources</div>
            <div>
              <table>
                <tbody>
                  {sourceBlockViews.map((node, key) =>
                    key % 2 === 0 ? (
                      <tr key={key}>
                        <td className="p-4">
                          <BlockSelector
                            icon={node.icon}
                            description={node.description}
                            title={node.title}
                          />
                        </td>

                        {key + 1 < sourceBlockViews.length && (
                          <td className="p-4">
                            <BlockSelector
                              icon={sourceBlockViews[key + 1].icon}
                              description={
                                sourceBlockViews[key + 1].description
                              }
                              title={sourceBlockViews[key + 1].title}
                            />
                          </td>
                        )}
                      </tr>
                    ) : null
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ComponentForSegmentByEvents() {
  return <div>Component for Segment by Events</div>;
}

function ComponentForSegmentOfList() {
  return <div>Component for Segment of List</div>;
}

function ComponentForLeadFromCRMIntegration() {
  return <div>Component for Lead from CRM Integration</div>;
}

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
export default LeadSourceModal;
