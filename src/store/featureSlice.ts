import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IFeature} from '@/interfaces/feature.interface';
import {features} from '@/utils/features';

type TypeState = {
    features: IFeature[];
}

const initialState: TypeState = {
    features: features
}

const featureSlice = createSlice({
    name: 'features',
    initialState,
    reducers: {}
});

export const {actions: featureActions, reducer: featureReducer} = featureSlice;