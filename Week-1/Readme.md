What is the main functionality of the browser?
The main functions of web browser is to fetch or retrieve informative resources from World Wide Web to the client/ user on demand, translate those files received from web server and display those content to the user and allow the client /user to access all other relevant resources & information via hyperlinks.

*High Level Components of a browser*
The main components of the browser include:
1. The user interface - including the address bar, back/forward buttons, bookmarks directory, etc., that is what you see other than the main window used to display the page you requested

2. Browser engine - the interface used to query and operate the rendering engine

3. Rendering engine - used to display the requested content, for example, if the requested content is html, it is responsible for parsing html and css, and displaying the parsed results

4. Network - used to complete network calls, such as http requests, it has a platform-independent interface and can work on different platforms

5. UI backend - used to draw basic components such as combo selection boxes and dialog boxes, with a general interface that is not specific to a certain platform, and the bottom layer uses the user interface of the operating system

6. JS interpreter - used to interpret and execute JS code

7. Data storage - belongs to the persistence layer. The browser needs to save various data similar to cookies in the hard disk. HTML5 defines the web database technology, which is a lightweight and complete client-side storage technology.

*Rendering engine and its use*
As the name suggests, this component is responsible for rendering a specific web page requested by the user on their screen. It interprets HTML and XML documents along with images that are styled or formatted using CSS, and a final layout is generated, which is displayed on the user interface. Every browser has its own unique rendering engine. Rendering engines might also differ for different browser versions. 


*Parsers*
HTMLCSS is a lightweight HTML/CSS parser written in C that allows applications to prepare a HTML document for rendering or conversion. HTMLCSS is extremely portable and only requires a C99 compiler like GCC, Clang, Visual C, etc. HTMLCSS is also extremely memory efficient, utilizing a shared string pool and smart CSS cache to minimize the size of a HTML document in memory.

*Script Processors*
The script processor Runs an inline or stored script on required documents. 


*Tree construction*
The site tree is a diagram or map used to organize the content, the pages of the site and the links that connect them.
It ensures that visitors can quickly get to the page that interests them and not get lost. Otherwise, they will not hesitate to look for the information elsewhere.

*Order of script processing*
Depending on the type of object, the task may have more than one Process page on which you can write scripts. The scripts in the Process pages are processed in the following order:

1. Pre-Process page and Process page
2. Child Post Process page
3. Post Process page

*Layout and Painting*
A website layout is the arrangement of all visual elements on a webpage. Through the intentional positioning of page elements, we can control the relationship between them to better guide the user experience.
Paint actually creates the picture of the layout that needs to be rendered.