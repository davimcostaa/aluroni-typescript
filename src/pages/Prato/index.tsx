import React, { lazy } from 'react'
import styles from './Prato.module.scss'
import { useNavigate, useParams } from 'react-router-dom'
import cardapio from 'data/cardapio.json'
import Header from 'components/Header'

const Tags = lazy(() => import('components/Tags'))
const NotFound = lazy(() => import('pages/NotFound'))

const Prato = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const prato = cardapio.find(item => item.id === Number(id));
 
    if (!prato) {
        return <NotFound />;
    }

    return (
    <>
    <Header />
        <button 
            className={styles.voltar}
            onClick={() => navigate(-1)}
            >
            {'< Voltar'}
        </button>

        <section className={styles.container}>
            <h1 className={styles.titulo}>
                {prato.title}
            </h1>
            <div className={styles.imagem}>
                <img src={prato.photo} alt={prato.title} />
            </div>
            <div className={styles.conteudo}>
                <p className={styles.conteudo__descricao}>
                    {prato.description}
                </p>
           
            <Tags {...prato} />  
            </div>
        </section>
    </>
  )
}

export default Prato