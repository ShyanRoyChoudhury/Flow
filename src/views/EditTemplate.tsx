import Editor from "@/components/Editor";
function EditTemplate(){


    return(
        <div className="px-6">
            <div>
                <form className="space-y-2">
                    <div className="space-y-1 font-semibold text-lg">
                        <div>Template Name</div>
                        <input
                            type="text"
                            className="w-2/5 p-2 shadow-sm focus:outline-none border rounded-md font-normal"
                            placeholder="Sample Template"
                        />
                    </div>
                    <div className="space-y-1 font-semibold text-lg">
                        <div>Subject Line</div>
                        <input
                            type="text"
                            className="w-3/5 p-2 shadow-sm border rounded-md focus:outline-none font-normal"
                            placeholder="Sample Template"
                        />
                    </div>
                    <div>
                        <Editor />
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <button className="border-[2.5px] border-blue-400 text-blue-400 font-bold px-4 py-2 rounded-md">Send Test Email</button>
                        </div>
                        <div className="space-x-1 flex">
                            <button className="border-[2.5px] px-4 py-2 rounded-md border-red-500 text-red-400 font-bold">
                                Discard
                            </button>
                            <button className="bg-blue-500 px-4 py-2 border-[#9CBAF8] border-[2.5px] rounded-md text-white 
                            font-bold flex space-x-1">
                                Update Email Template
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditTemplate;