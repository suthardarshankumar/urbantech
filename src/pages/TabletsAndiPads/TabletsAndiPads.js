import React from 'react';
import styles from './TabletsAndiPads.module.css';
import Latesttablets from '../../components/tabletsAndiPadsShop/Latesttablets/Latesttablets';
import Tablets from '../../components/tabletsAndiPadsShop/tabletsAndiPadsSection/Tablets';
import Ipads from '../../components/tabletsAndiPadsShop/tabletsAndiPadsSection/IPads';

const TabletsAndiPads = () => {
    return (
        <>
            <div className={styles.container}>
                <Latesttablets />
                <Tablets />
                <Ipads />
            </div>
        </>
    )
}

export default TabletsAndiPads;