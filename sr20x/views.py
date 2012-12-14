from django.template.loader import get_template
from django.template import Context
from django.http import HttpResponse
import markdown
import codecs

## Views based on the misssion.html template, most functionality in thier javascript
def home(request):
    page_title = "Home"
    template = get_template('mission.html')
    html = template.render(Context({'page_title': page_title}))
    return HttpResponse(html)

def missions(request):
    page_title = "Select a  Mission"
    template = get_template('mission.html')
    html = template.render(Context({'page_title': page_title}))
    return HttpResponse(html)

## Views based on the static.html template, all pull a markdown file for thier page_content from /static/text 

def reference(request):
    page_title = "Reference"
    input_file = codecs.open("/home/zglick/Projects/sr20x/sr20x/static/text/reference.txt", mode="r", encoding="utf8")
    text = input_file.read()
    page_content = markdown.markdown(text)
    template = get_template('static.html')
    html = template.render(Context({'page_title': page_title, 'page_content': page_content}))
    return HttpResponse(html)

def legal(request):
    page_title = "Legal"
    input_file = codecs.open("/home/zglick/Projects/sr20x/sr20x/static/text/legal.txt", mode="r", encoding="utf8")
    text = input_file.read()
    page_content = markdown.markdown(text)
    template = get_template('static.html')
    html = template.render(Context({'page_title': page_title, 'page_content': page_content}))
    return HttpResponse(html)

def about(request):
    page_title = "About"
    input_file = codecs.open("/home/zglick/Projects/sr20x/sr20x/static/text/about.txt", mode="r", encoding="utf8")
    text = input_file.read()
    page_content = markdown.markdown(text)
    template = get_template('static.html')
    html = template.render(Context({'page_title': page_title, 'page_content': page_content}))
    return HttpResponse(html)
