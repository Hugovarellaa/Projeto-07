interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        url_link: string;
    }
}

export function RepositoryItem(props: RepositoryItemProps) {
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