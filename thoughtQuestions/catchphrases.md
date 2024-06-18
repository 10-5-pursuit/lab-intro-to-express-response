What characters are allowed in a URL?
    || a-z, A-Z, 0-9, - _ . ! ~ * ' ( ) # $ @ & = + , :
    || NOT ALLOWED: space() tab(\t) newline(\n) carriage return(\r) null(\0) backslash

What happens if you try to create a URL /tim gunn 
    || '%20' replaces the space in the URL: Cannot GET /tim%20cook (invalid path)

Is there a difference between /timgunn and /TimGunn and /tim/gunn? || 
    a./b. the first letter after the forward slash must be lowercase; if capital letter is entered into the url as the endpoint; once you press enter, the letter converts into the lowercase version of itself.  Although the case changes, that does not effect the usuability of the url.  We will not encounter any errors when accessing the data.  Both timGunn.com and Timgunn.com will link you to the same endpoint. 
    c. /tim/gunn WILL interfere with routing.  /tim/gunn is a different route than timgunn. 
        In addition, if you use a dash in the url created in the code, then you must use a dash to access that endpoint.
        /tim/gunn and timGunn is a different route than tim-gunn.

If you have a phrase like Here's looking at you, kid, how do you deal with the ' in Here's? 
    || template literal