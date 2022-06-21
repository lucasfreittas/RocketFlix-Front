import { Routes, Route } from 'react-router-dom';

import { CreateMovie } from '../Pages/CreateMovie';
import { Home } from '../Pages/Home';
import { MoviePreview } from '../Pages/MoviePreview';
import { Profile } from '../Pages/Profile';


export function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/newReview' element={<CreateMovie />} />
            <Route path='/moviePreview' element={<MoviePreview />} />
            <Route path='/profile' element={<Profile />} />
        </Routes>
    )
}