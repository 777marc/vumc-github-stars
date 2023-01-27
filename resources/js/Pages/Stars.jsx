import { Link, Head } from "@inertiajs/react";
import RepoRow from "../Components/RepoRow";

export default function Stars(props) {
    return (
        <div>
            <Head title="Stars"></Head>

            <div className="relative flex justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="flex-col">
                    <h1 className="text-white">Github Stars</h1>
                    <table className="shadow-lg bg-[#37515c] border-separate rounded-md border-4 border-gray-500/50">
                        <thead>
                            <tr className="">
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
                                    />
                                );
                            })}
                        </tbody>
                    </table>
                    <Link href="/refresh">
                        <button className="shadow-lg bg-[#61737a] border-separate rounded-md border-2 px-8 py-2 mt-5 border-white-500/50">
                            Refresh
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
