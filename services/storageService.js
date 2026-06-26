/*
========================================
ICT AI Assistant
Storage Service
Version 1.4.1
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

    },

    /*
    ========================================
    Usage Statistics
    ========================================
    */

    getUsage() {

        const today =
            new Date().toISOString().split("T")[0];

        const usage =
            this.get("usageStatistics", {

                totalQuestions: 0,

                todayQuestions: 0,

                lastDate: today

            });

        if (usage.lastDate !== today) {

            usage.todayQuestions = 0;

            usage.lastDate = today;

            this.set(
                "usageStatistics",
                usage
            );

        }

        return usage;

    },

    increaseQuestionCounter() {

        const usage =
            this.getUsage();

        usage.totalQuestions++;

        usage.todayQuestions++;

        this.set(
            "usageStatistics",
            usage
        );

        return usage;

    }

};
