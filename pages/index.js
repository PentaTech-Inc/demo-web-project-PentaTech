/**
 * Index
 * @summary The home page of our website.
 */

import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

// Miguel image import library
import img from './screamingsun.jpg';

const Home = props => {
    return (
        <Layout>
            {/* <h1>Media Tracker</h1>
            <p>Home page</p> */}
            <p>{`Res: ${props.result}`}</p>
            <LoadingButton />
            <br />
            {/* Fabian's call to endpoint for Assignment 4 */}
            <div>
                <h4>Using package 'qr-image' to generate QR code</h4>
                <img src='http://localhost:5000/qrcode' />
            </div>

            {/* Miguel's library image call */}
            <div>
                <h4>'next-images' to add images to webpage</h4>
                <img src={img} alt='logo' id='logoImage' />
            </div>
        </Layout>
    );
};

/** Component for interactive button */
const LoadingButton = () => {
    const [isLoading, setLoading] = useState(false);
    const [isClicked, setClicked] = useState(false);
    const [names, setNames] = useState([]);

    useEffect(() => {
        if (isLoading) {
            checkIn().then(props => {
                setNames(props.result);
                setClicked(true);
                setLoading(false);
            });
        }
    }, [isLoading]);

    const handleClick = () => setLoading(true);

    return (
        <div>
            <Button
                variant="primary"
                disabled={isLoading}
                onClick={!isLoading ? handleClick : null}
            >
                {isLoading ? 'Loading…' : 'Check in'}
            </Button>
            {
                isClicked ?
                    <div>
                        <br />
                        {names.map((name, index) => {
                            return (
                                <p key={index}>{name}<br /></p>
                            );
                        })}
                    </div>
                    :
                    null
            }
        </div>
    );
}

// ADD YOUR GET ROUTE, YOUR NAME IN PARAM FOR FUNCTION, AND YOUR RESPONSE IN RETURN OBJECT
const checkIn = async () => {
    return axios.all([
        axios.get('http://localhost:5000/check-fabian'),
        axios.get('http://localhost:5000/check-miguel'),
        axios.get('http://localhost:5000/check-chy'),
    ]).then(axios.spread(function (fabian, miguel, chy) {
        return { result: [fabian.data.Success, miguel.data.Success, chy.data.Success] }
    })).then().catch(error => {
        console.error(error);
        return { result: 'Failed to check in members' }
    });
}

Home.getInitialProps = async () => {
    try {
        // call server at endpoint /search-title
        const res = await axios.get('http://localhost:5000/ping');
        // res.data is the JSON object returned which is { Success: ***data*** }
        return { result: res.data.Success }
    } catch (error) {
        console.error(error);
        return { result: 'Failed to fetch data from server' }
    }
};

export default Home;