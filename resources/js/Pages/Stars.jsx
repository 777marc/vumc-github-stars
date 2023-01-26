import { Link, Head } from "@inertiajs/react";

const NumberOfStars = (props) => {
    return <p>{props.stars}</p>;
};

export default function Stars(props) {
    return (
        <>
            <Head title="Stars" />
            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <h1 className="text-white">Github Stars</h1>
                <NumberOfStars stars={props.stars} />
            </div>
        </>
    );
}
