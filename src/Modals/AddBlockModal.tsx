import { QuestionSVG } from "@/SVGs/SVG";
import BlockSelector from "@/components/BlockSelector";
import { actionBlockViews } from "@/lib/actionBlockViews";
import { conditionBlockViews } from "@/lib/conditionBlockViews";
import { outreachBlockViews } from "@/lib/outreachBlockViews";

function AddBlockModal() {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="mx-auto py-4 w-full border-b">
        <div className="text-lg font-black text-gray-800 flex items-center space-x-1 ">
          <div className="font-bold text-xl">Add Blocks</div>
          <div>
            <QuestionSVG />
          </div>
        </div>
        <p className="text-sm text-gray-500">
          Click on a block to configure and add it in sequence.
        </p>
      </div>

      <div className="flex-1 flex gap-4 py-4 px-2"> 
        <div className="w-full h-full"> 
          <div className="flex flex-col gap-4 py-4 px-2 w-full h-full">
            <div className="flex-1 h-full"> 
              <div className="h-full ">
                <div>
                  <div className="font-bold text-xl">Outreach</div>
                  <div className="test">
                    <table className="w-full">
                      <tbody>
                        {outreachBlockViews.map((node, key) =>
                          key % 2 === 0 ? (
                            <tr key={key}>
                              <td className="p-4 w-1/2">
                                <BlockSelector
                                  icon={node.icon}
                                  description={node.description}
                                  title={node.title}
                                />
                              </td>
                              {key + 1 < outreachBlockViews.length && (
                                <td className="p-4 w-1/2">
                                  <BlockSelector
                                    icon={outreachBlockViews[key + 1].icon}
                                    description={outreachBlockViews[key + 1].description}
                                    title={outreachBlockViews[key + 1].title}
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
                <div>
                  <div className="font-bold text-xl">Conditions</div>
                  <div>
                    <table className="w-full">
                      <tbody>
                        {conditionBlockViews.map((node, key) =>
                          key % 2 === 0 ? (
                            <tr key={key}>
                              <td className="p-4 w-1/2">
                                <BlockSelector
                                  icon={node.icon}
                                  description={node.description}
                                  title={node.title}
                                />
                              </td>
                              {key + 1 < conditionBlockViews.length && (
                                <td className="p-4">
                                  <BlockSelector
                                    icon={conditionBlockViews[key + 1].icon}
                                    description={conditionBlockViews[key + 1].description}
                                    title={conditionBlockViews[key + 1].title}
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
                <div>
                  <div className="font-bold text-xl">Actions</div>
                  <div>
                    <table className="w-full">
                      <tbody>
                        {actionBlockViews.map((node, key) =>
                          key % 2 === 0 ? (
                            <tr key={key}>
                              <td className="p-4 w-1/2">
                                <BlockSelector
                                  icon={node.icon}
                                  description={node.description}
                                  title={node.title}
                                />
                              </td>
                              {key + 1 < actionBlockViews.length && (
                                <td className="p-4">
                                  <BlockSelector
                                    icon={actionBlockViews[key + 1].icon}
                                    description={actionBlockViews[key + 1].description}
                                    title={actionBlockViews[key + 1].title}
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
              </div> {/* Moved closing div here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBlockModal;
