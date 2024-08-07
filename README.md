# Share Nights

![GitHub Actions](https://github.com/EdroVolt/share-nights/actions/workflows/build-and-deploy-docker-image.action.yml/badge.svg)

Share Nights is a [Next.js](https://nextjs.org/) application that provides a cool, interactive, and fun way to share your favorite shows and movies with your friends.

## Getting Started

Before starting, ensure you are using Node.js version 19.

1. Use the following command to install and use it.

    ```bash
    nvm install
    nvm use
    ```

2. Install the required dependencies by running the following command in the root folder:

    ```bash
    npm install
    ```

3. Run the development server:

    ```bash
    npm run dev
    ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to view the app.

> ###  Using [Ansible](https://www.ansible.com/)


- **1.** Clone the repo.

- **2.** cd to the project directory.

- **3.** Open your terminal and make sure you are in the project root directory.

- **4.** Run the following command to create a python [venv](https://docs.python.org/3/library/venv.html):

    ```bash
    python3 -m venv ansible-env
    ```

- **5.** Activate the virtual environment:

    ```bash
    source ansible-env/bin/activate
    ```

- **6.** Install Ansible and required dependencies:

    ```bash
    pip install ansible
    pip install requests
    ansible-galaxy collection install community.docker
    ```

- **7.** Run the playbook within the virtual environment:

    ```bash
    ansible-playbook site.yml --ask-become-pass
    ```

You will see something like this:

![ansible terminal logs](docs/images/image.png)

> After the ansible done it's job you can access the app on [http://localhost:3000](http://localhost:3000)

## Tests

The project is using [jest](https://jestjs.io/) for unit testing

to run tests use the following command

```bash
    npm test
```

in dev mode us the following command for hot reload test running

```bash
    npm run test:watch
```

### test coverage

To get the test coverage run the following command:

```bash
    npm run test:coverage
```

## Note

The app is still under development. If you'd like to contribute, don't hesitate to open a pull request.
