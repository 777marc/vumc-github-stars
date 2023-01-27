import { Link, Head } from "@inertiajs/react";
import RepoRow from "../Components/RepoRow";

export default function Stars(props) {
    return (
        <div>
            <Head title="Stars"></Head>

            <div className="relative flex justify-center min-h-screen bg-gray-100 dark:bg-gray-800 sm:items-center sm:pt-0">
                <div className="flex-col">
                    <div className="flex justify-center">
                        <h1 className="text-white text-xl font-bold">
                            The most-starred public PHP projects on Github!
                        </h1>
                    </div>

                    <table className="shadow-lg bg-[#c0dcdd] rounded-md border-4 border-gray-500/50">
                        <thead>
                            <tr className="text-slate-900">
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
                    <Link href="/refresh">
                        <button className="shadow-lg text-slate-300 bg-[#37515c] rounded-sm border-4 px-8 py-2 mt-5 border-gray-500/50">
                            Refresh
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
