import { Link, Head } from "@inertiajs/react";

export default function Modal(props) {
    const formatDate = (dateTime) => {
        const date = new Date(dateTime);
        const str = date.toLocaleString("en-us");
        return str;
    };

    return (
        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setShowModal(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                    <div className="mt-3 sm:flex">
                        <div className="mt-2 text-center sm:ml-4 sm:text-left">
                            <h4 className="text-md font-medium text-gray-800">
                                Repo Details:
                            </h4>
                            <div className="mt-2 text-[15px] leading-relaxed text-gray-500">
                                <div className="flex-col z-10">
                                    <p className="font-bold">
                                        Id: {props.details.repository_id}
                                    </p>
                                    <p className="font-bold">
                                        Name: {props.details.name}
                                    </p>

                                    <p className="font-bold">
                                        Last Published:{" "}
                                        {formatDate(
                                            props.details.last_publish_date
                                        )}
                                    </p>

                                    <p className="font-bold">Description:</p>
                                    {props.details.description}
                                    <p className="font-bold">
                                        # of Stars:{" "}
                                        {props.details.number_of_starts}
                                    </p>
                                    <a
                                        href={props.details.url}
                                        className="font-bold text-blue-300"
                                        target="_blank"
                                    >
                                        Link to repository
                                    </a>
                                </div>
                            </div>
                            <div className="items-center gap-2 mt-3 sm:flex">
                                <button
                                    className="w-full mt-2 p-2.5 flex-1 text-white bg-gray-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                                    onClick={() => props.close()}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
