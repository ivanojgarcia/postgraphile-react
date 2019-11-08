import React, { Fragment } from 'react';
import { GET_ALL_ACTORS } from '../queries/Actors';
import { useQuery } from 'react-apollo';

const Actors = () => {

    const { data, loading, error } = useQuery(GET_ALL_ACTORS);
        if (loading) return (
            <div className="mt-2">
                Cargando...
            </div>
        );
        console.log(data)
    return (
        <Fragment>
            <h1>Actors</h1>
        </Fragment>
    );
};

export default Actors;