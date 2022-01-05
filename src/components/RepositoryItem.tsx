//O componente filho pode receber informações do componente pai. Para acessar essas informações basta passar o "props" como parâmetro no componente filho.

interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>

      <a href={props.repository.html_url}>Acessar repositório</a>
    </li>
  );
}
