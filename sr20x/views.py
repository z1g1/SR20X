from django.template import Template
from django.http import HttpResponse

def home(request):
    template = get_template('mission.html')
    page_title = "Generate Mission"
    html = template.render(Context({'page_title': page_title}))
    return HttpResponse(html)

