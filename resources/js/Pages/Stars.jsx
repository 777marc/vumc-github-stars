import { Link, Head } from "@inertiajs/react";

const NumberOfStars = (props) => {
    return (
        <>
            <h2>{props.repoName}</h2>
            <p>stars: {props.stars}</p>
        </>
    );
};

const stars = [
    {
        repository_id: 123,
        name: "my first repo",
        url: "https://github.com/777marc/myrepo",
        created_date: "2020-01-15",
        last_publish_date: "2022-07-17",
        description: "A really cool repo about things",
        number_of_starts: 354,
    },
    {
        repository_id: 124,
        name: "my second repo",
        url: "https://github.com/777marc/myrepo",
        created_date: "2020-01-15",
        last_publish_date: "2022-07-17",
        description: "A really cool repo about things",
        number_of_starts: 354,
    },
];

export default function Stars(props) {
    return (
        <>
            <Head title="Stars" />
            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <h1 className="text-white">Github Stars</h1>
                {stars.forEach((star) => {
                    console.log("star:", star);
                    <NumberOfStars
                        repoName={star.name}
                        stars={star.number_of_starts}
                    />;
                })}
            </div>
        </>
    );
}
