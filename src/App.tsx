
import { RepositoryList } from './components/RepositoryList'

import './styles/global.scss'

export function App() {
    //throw new Error('Tinham duas opções: Funcionar ou não funcionar.. Adivinha? Não funcionou!')

    return (
            <RepositoryList />// Quando são citados mais de um componente no retorno da função, é necessário que eles estejam dentro de outro componente (div por exemplo)
        // O fragmento (<>) realiza o papel deste componente sem interferir no css da aplicação
    )
}