from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'sr20x.views.home', name='home'),
    # url(r'^sr20x/', include('sr20x.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
    
    # Home Directory
    url(r'^$', 'sr20x.views.home', name='home'),
    url(r'^missions/', 'sr20x.views.missions', name='missions'),
    url(r'^reference/', 'sr20x.views.reference', name='reference'),
    url(r'^blog/', 'sr20x.views.blog', name='blog'),
    url(r'^legal/', 'sr20x.views.legal', name='legal'),
    url(r'^about/', 'sr20x.views.about', name='about')
)
