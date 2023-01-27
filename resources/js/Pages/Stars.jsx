import { Link, Head } from "@inertiajs/react";
import RepoRow from "../Components/RepoRow";

export default function Stars(props) {
    return (
        <div>
            <Head title="Stars"></Head>

            <div className="relative flex justify-center min-h-screen bg-gray-200 sm:items-center sm:pt-0">
                <div className="flex-col">
                    <div className="flex justify-center">
                        <h1 className="text-slate-600 text-xl font-bold mb-5">
                            The most-starred public PHP projects on Github!
                        </h1>
                    </div>

                    <table className="shadow-lg bg-white border-4 border-gray-600">
                        <thead>
                            <tr className="text-slate-600 py-4">
                                <th>Repo Name</th>
                                <th>Stars</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.stars.map((star) => {
                                return (
                                    <RepoRow
                                        key={star.repository_id}
                                        repoName={star.name}
                                        stars={star.number_of_starts}
                                        details={star}
                                    />
                                );
                            })}
                        </tbody>
                    </table>
                    <Link href="/refresh" className="flex justify-center">
                        <button className="shadow-lg text-white bg-gray-600 rounded-sm border-4 px-8 py-2 mt-5 border-gray-500">
                            Refresh
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
