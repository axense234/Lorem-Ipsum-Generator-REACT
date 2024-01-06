# **Lorem Ipsum Generator**

A simple React Project that focuses on the basics of react by displaying paragraphs based on input.

## **Description**

A simple React Project that focuses on the basics of react by displaying paragraphs based on input.It takes those paragraphs from data.js,in which there can be added more paragraphs and the project will scale up to that.

## **Getting Started**

### Dependencies

- Check package.json for details.
- Git
- Docker(if you want to execute using Docker)

### Installing

```
git clone https://github.com/axense234/Lorem-Ipsum-Generator-REACT.git
```

### Executing program

- **Using NPM**

```
npm install
npm start
```

- **Using Docker**

```
docker build -t lig-react:0.3.0 .
docker stop lig-react-app
docker rm lig-react-app
docker run -d -p 3000:3000 --name lig-react-app lig-react:0.3.0
```

## **Authors**

- **axense234**

## **Version History**

- 0.3
  - Analyzed code to gather to-do tasks and made it so now the generator can generate more than the default paragraphs.
- 0.2
  - Improved React logic and also made the website look better
  - See [commit change]https://github.com/axense234/Lorem-Ipsum-Generator-REACT/commits/master) or See [release history](https://github.com/axense234/Lorem-Ipsum-Generator-REACT/releases)
- 0.1
  - Initial Release

## **License**

This project is licensed under the GNU License - see the LICENSE.md file for details

## **Acknowledgments**

- Inspired by [_John Smilga 15 React Projects_](https://www.youtube.com/watch?v=a_7Z7C_JCyo&t=8s)
