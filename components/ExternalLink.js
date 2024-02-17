export default function ExternalLink({ href, children }) {
    return (
        <a href={href} target="_blank" rel="noreferrer">{children}</a>
    )
}