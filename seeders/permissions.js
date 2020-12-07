const admin = {
    all: {
        user: {
            create: true,
            delete: true,
            update: true,
            read: true
        },
        challenge: {
            create: false,
            delete: false,
            update: false,
            read: true
        },
        trick: {
            create: false,
            delete: false,
            update: false,
            read: true
        },
        reward: {
            create: true,
            delete: true,
            update: true,
            read: true
        },
        media: {
            create: false,
            delete: false,
            update: false,
            read: true
        }
    },
    own: {
        user: {
            create: true,
            delete: true,
            update: true,
            read: true
        },
        challenge: {
            create: false,
            delete: false,
            update: false,
            read: true
        },
        trick: {
            create: false,
            delete: false,
            update: false,
            read: true
        },
        reward: {
            create: true,
            delete: true,
            update: true,
            read: true
        },
        media: {
            create: false,
            delete: false,
            update: false,
            read: true
        }
    },

}

const brand = {
    all: {
        user: {
            create: false,
            delete: false,
            update: false,
            read: false
        },
        challenge: {
            create: false,
            delete: false,
            update: false,
            read: false
        },
        trick: {
            create: false,
            delete: false,
            update: false,
            read: true
        },
        reward: {
            create: false,
            delete: false,
            update: false,
            read: true
        },
        media: {
            create: false,
            delete: false,
            update: false,
            read: false
        }
    },
    own: {
        user: {
            create: true,
            delete: false,
            update: true,
            read: true
        },
        challenge: {
            create: true,
            delete: true,
            update: true,
            read: true
        },
        trick: {
            create: false,
            delete: false,
            update: false,
            read: true
        },
        reward: {
            create: false,
            delete: false,
            update: false,
            read: true
        },
        media: {
            create: true,
            delete: true,
            update: true,
            read: true
        }
    },

}
const customer = {
    all: {
        user: {
            create: false,
            delete: false,
            update: false,
            read: false
        },
        challenge: {
            create: false,
            delete: false,
            update: false,
            read: false
        },
        trick: {
            create: false,
            delete: false,
            update: false,
            read: false
        },
        reward: {
            create: false,
            delete: false,
            update: false,
            read: true
        },
        media: {
            create: false,
            delete: false,
            update: false,
            read: false
        }
    },
    own: {
        user: {
            create: true,
            delete: false,
            update: true,
            read: true
        },
        challenge: {
            create: false,
            delete: false,
            update: false,
            read: true
        },
        trick: {
            create: true,
            delete: true,
            update: true,
            read: true
        },
        reward: {
            create: false,
            delete: false,
            update: false,
            read: true
        },
        media: {
            create: true,
            delete: true,
            update: true,
            read: true
        }
    },

}

console.log(admin.own.challenge.create);
console.log(brand.own.challenge.delete);


