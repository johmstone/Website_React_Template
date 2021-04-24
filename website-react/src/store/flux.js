import WebDirectory from '../services/webdirectory';

const getState = ({ getStore, getActions, setStore }) => {
	
	const WebDirectorySVC = new WebDirectory();

	return {
		store: {
			menu: []
		},
		actions: {
			uploadMenu: (model) => {								
				WebDirectorySVC.Menu(model).then(items => {
					console.log(items);
					setStore({ menu: items});
				});
			}
		}
	};
};

export default getState;
