const snakeCase = require('../utils/snake-case');


function createPropertyOptions(property, attr) {
	const type    = attr.type;
	const options = attr.options;

	const out = {
		enumerable   : true,
		configurable : true,

		get() {
			return this.transforms[type](this._data[property]);
		},
	};

	// Return here if attribute is readOnly
	if (options.readOnly) return out;

	out.set = function setter(newValue) {
		this._data[property] = newValue;
	};

	return out;
}


class Model {
	constructor(data) {
		Object.defineProperty(this, '_data', {
			enumerable : false,
			value      : data,
		});

		Object.defineProperty(this, 'transforms', {
			enumerable : false,

			value : {
				boolean(value) { return !!value;             },
				number(value)  { return parseInt(value, 10); },
				string(value)  { return value + '';          },
			},
		});


		const attributes = this.constructor.attrs();

		for (let attrKey in attributes) {
			if (!attributes.hasOwnProperty(attrKey)) continue;

			let alias       = snakeCase(attrKey);
			const attribute = attributes[attrKey];

			if (attribute.options.alias) {
				alias = attribute.options.alias;
			}

			const propertyOptions = createPropertyOptions(alias, attribute);
			Object.defineProperty(this, attrKey, propertyOptions);
		}
	}

	static attr(valueType, options) {
		return {
			type    : valueType,
			options : options || {},
		};
	}
}


module.exports = Model;
