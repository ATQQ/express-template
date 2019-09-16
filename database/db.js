const config = require('./config'),
    Sequelize = require("sequelize");
    
console.log('init Sequelize');

// const generateId = () => {
//     return Date.now().toString().substring(5);
// }

let sequelize = new Sequelize(config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: config.dialect,
        pool: {
            max: 5,
            min: 0,
            idle: 30000
        }
    }
)

const ID_TYPE = Sequelize.STRING(50);

// 自动化构建Model
const defineModel = (name, attributes) => {
    let attrs = {};
    for (const key in attributes) {
        if (attributes.hasOwnProperty(key)) {
            const value = attributes[key];
            if (typeof value === 'object' && value['type']) {
                const obj={}
                for (const k in value) {
                    if (value.hasOwnProperty(k)) {
                        obj[k]=value[k];
                    }
                }
                attrs[key]=obj;
            } else {
                attrs[key] = {
                    type: value,
                    allowNull: false
                }
            }
        }
    }

    // attrs.id = {
    //     type: ID_TYPE,
    //     primaryKey: true
    // }

    attrs.create_date = {
        type: Sequelize.BIGINT,
        allowNull: false
    }

    attrs.update_date = {
        type: Sequelize.BIGINT,
        allowNull: false
    }

    attrs.update_times={
        type: Sequelize.INTEGER,
        allowNull: false
    }


    return sequelize.define(name, attrs, {
        tableName: name,
        timestamps: false,
        hooks: {
            beforeValidate: function (obj) {
                let now = Date.now();
                if (obj.isNewRecord) {
                    console.log(`will create entity... ${obj}`)
                    // if (!obj.id) {
                    //     obj.id = generateId();
                    // }
                    obj.create_date = now;
                    obj.update_date = now;
                    obj.update_times = 0;
                } else {
                    obj.update_date = now;
                    obj.update_times++;
                }
            }
        }
    })

}

const TYPES = ['STRING', 'INTEGER', 'BIGINT', 'TEXT', 'DOUBLE', 'DATEONLY', 'BOOLEAN'];

let exp = {
    defineModel: defineModel,
    sync: () => {
        // only allow create ddl in non-production environment:
        if (process.env.NODE_ENV !== 'production') {
            sequelize.sync({ force: false });
        } else {
            throw new Error('Cannot sync() when NODE_ENV is set to \'production\'.');
        }
    }
}

for (const type of TYPES) {
    exp[type] = Sequelize[type];
}


// exp.ID = ID_TYPE;
// exp.generateId = generateId;

module.exports = exp;