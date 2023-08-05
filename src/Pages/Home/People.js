import React from 'react';

const People = ({ people }) => {
    return (
        
        <div className="py-8 text-black grid  px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:items-center justify-center">

            <div className='items-center justify-center'><p>
              {people.description}
            </p>
            </div>

            <div className="flex items-center justify-around ">
                <img className='w-16 rounded-full' src={people.img} />
                <div>
                    <strong>{people.name}</strong>
                    <p>Technical Expert</p>
                </div>
            </div>
        </div>
    );
};

export default People;