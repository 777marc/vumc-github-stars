import { useState } from "react";
import Modal from "./Modal";

export default function RepoRow(props) {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <tr>
                <td className="border px-8 py-2 text-slate-800">
                    {props.repoName}
                </td>
                <td className="border px-8 py-2 text-slate-800">
                    {props.stars}
                </td>
                <td className="border px-8 py-2 text-slate-800">
                    <button
                        className="shadow-lg text-white bg-[#37515c] rounded-sm border-4 px-8 border-gray-500/50"
                        onClick={() => setShowModal(true)}
                    >
                        Details
                    </button>
                </td>
                {showModal ? (
                    <Modal
                        details={props.details}
                        close={() => setShowModal(false)}
                    />
                ) : null}
            </tr>
        </>
    );
}
