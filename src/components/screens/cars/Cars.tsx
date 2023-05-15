import {FC, useState, useMemo} from 'react';
import Layout from '@/components/layout/Layout';
import styles from './Cars.module.scss';
import CarItem from '@/components/ui/car/CarItem';
import MySelect from '@/components/ui/select/MySelect';
import {ICarData} from '@/interfaces/car.interface';

const Cars: FC<ICarData> = ({cars}) => {
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('');

    const searchedCars = useMemo(() => {
        return cars.filter(car => car.name.toLowerCase().includes(search.toLowerCase()));
    }, [search]);

    const setSelectedSort = (sort: string) => {
        setSort(sort);
        if (sort === 'ascending'){
            searchedCars.sort((a, b) => a['price'] - b['price']);
        } else if (sort === 'descending'){
            searchedCars.sort((a, b) => b['price'] - a['price']);
        } else if (sort === 'name'){
            searchedCars.sort((a, b) => a['name'].localeCompare(b['name']));
        } else if (sort === 'id'){
            searchedCars.sort((a, b) => a['id'] - b['id']);
        }
    }
    
    return (
        <Layout title='Cars'>
            <div className="container">
                <header className={styles.header}>
                    <h3 className={styles.title}>
                    At our car rental website, we have a wide variety of vehicles to meet any need. Whether you're looking for a spacious SUV or a sleek sports car, we've got you covered. Our fleet includes everything from rugged off-road vehicles to high-performance sports cars. So no matter what your preferences are, we have the perfect car for you.
                    </h3> 
                    <input 
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        placeholder="Search"
                        type='text'
                        className={styles.input}
                    />
                    <MySelect defaultValue='Sort by' value={sort} onChange={setSelectedSort} options={[
                        {value: 'ascending', name: 'From cheap to expensive'},
                        {value: 'descending', name: 'From expensive to cheap'},
                        {value: 'name', name: 'By name'},
                        {value: 'id', name: 'By default'}
                    ]} />
                </header>
                <main className={styles.main}>
                    {searchedCars.map(car => <CarItem key={car.id} car={car} />)}
                </main>
            </div>
        </Layout>
    );
}

export default Cars;