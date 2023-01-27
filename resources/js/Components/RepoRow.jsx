export default function RepoRow(props) {
    return (
        <tr>
            <td className="border px-8 py-2">{props.repoName}</td>
            <td className="border px-8 py-2">{props.stars}</td>
            <td className="border px-8 py-2">details</td>
        </tr>
    );
}
