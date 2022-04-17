import React from 'react';
import exercise from "../../assets/icons/icons8-deadlift-100.png";
import food from "../../assets/icons/icons8-vegetarian-food-100.png";
import tablet from "../../assets/icons/icons8-smartphone-tablet-100.png";
import ExtraCard from '../ExtraCard/ExtraCard';

const Extras = () => {
    const additionals = [
        {
            id: 1,
            name: "Weekly Exercise Plan",
            description: "Your workouts will be custom-tailored to specifically meet your needs based on your goals and lifestyle.",
            img: exercise
        },
        {
            id: 2,
            name: "Food and Nutrition Guide",
            description: "I will help you with your nutrition habits as well as give you a plan to follow to ensure you're fueling your body with the right nutrients.",
            img: food
        },
        {
            id: 3,
            name: "Smartphone App",
            description: "The GymWhale Fitness App includes more than 1,000 exercises with video demonstrations and client/coach messaging.",
            img: tablet
        }
    ]
    return (
        <div className='mb-10'>
            <div className='py-6'>
                <h3 className='text-4xl md:text-5xl font-semibold text-center'><span className='text-blue-900'>Additionals</span> you get</h3>
                <p className='text-2xl text-center font-semibold text-gray-500'>with any purchase you make</p>
            </div>
            <div className='w-5/6 md:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    additionals.map(additional => <ExtraCard key={additional.id} additional={additional}></ExtraCard>)
                }
            </div>
        </div>
    );
};

export default Extras;