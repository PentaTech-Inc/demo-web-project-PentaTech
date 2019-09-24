/**
 * Search
 * This page will display search results.
 * Data for the search request is passed as a query string from the previous page.
 * Will request search results from our server here.
 */

import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


const Search = () => {
    const router = useRouter();

    return (
        <Layout>
            <h1>Search</h1>
            <p></p>
            <Button>Click</Button>
        </Layout>
    );
};

export default Search;