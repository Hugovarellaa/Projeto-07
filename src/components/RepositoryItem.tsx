export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository.name}</strong>
            <p>{props.repository.description}</p>
            <a href={props.repository.url_link}>
                Acessar Repositorios
            </a>
        </li>
    )
}