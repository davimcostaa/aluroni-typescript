import classNames from 'classnames'
import React from 'react'
import styles from './Tags.module.scss'
import { Prato } from 'types/Prato'

const Tags = ({
    category,
    size,
    serving,
    price
}: Prato ) => {
  return (
    <div className={styles.tags}>
        <div className={classNames({
            [styles.tags__tipo]: true,
            [styles[`tags__tipo__${category.label.toLowerCase()}`]]: true
        })}>
            {category.label}
        </div>
        <div className={styles.tags__porcao}>
            {size}g
        </div>
        <div className={styles.tags__qtdpessoas}>
            Serve {serving} pessoa{serving === 1 ? '' : 's'}
        </div>
        <div className={styles.tags__valor}>
            R$ {price}
        </div>
    </div>
  )
}

export default Tags