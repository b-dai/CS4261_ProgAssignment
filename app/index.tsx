import { registerRootComponent } from 'expo';
import { AuthProvider } from '../AuthContext.js';
import MainNavigator from '../MainNavigator.js';
import React from 'react';

function application() {
    return (
        <AuthProvider>
            <MainNavigator />
        </AuthProvider>
    );
}

registerRootComponent(application);
