/*
========================================
ICT AI Assistant
Storage Service
Version 1.3.1
========================================
*/

const StorageService = {

    get(key, defaultValue = null) {

        try {

            const value =
                localStorage.getItem(key);

            return value
                ? JSON.parse(value)
                : defaultValue;

        } catch (error) {

            console.error(
                "Storage read error:",
                error
            );

            return defaultValue;

        }

    },

    set(key, value) {

        try {

            localStorage.setItem(
                key,
                JSON.stringify(value)
            );

        } catch (error) {

            console.error(
                "Storage write error:",
                error
            );

        }

    },

    remove(key) {

        localStorage.removeItem(key);

    },

    clear() {

        localStorage.clear();

    }

};
