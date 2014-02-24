require 'date'

puts "[INFO] Create new post"

def gather_header()
	factions = ["Default","Circle Orboros","Convergence","Cryx","Cygnar","Khador","Legion of Everblight","Mercenaries","Minions","Skorne","The Protectorate of Menoth","The Retribution of Scyrah","Trollbloods"]

	puts "[INFO] Post title?"
	post_date = DateTime.now.strftime("%Y-%m-%d")
	post_title = STDIN.gets.chomp()
	post_filename = "_posts/#{post_date}-#{post_title.downcase.gsub(" ","-")}.md"

	puts "[INFO] Post Tags?"
	post_tags =  STDIN.gets.chomp()

	puts "[INFO] Post Image, defualt value sr logo?"
	factions.each_with_index do |faction,key|
		puts "#{key}. #{faction}"
	end
	post_image_selection =  STDIN.gets.chomp()

	post_image = factions[post_image_selection.to_i]

	post = [post_date,post_title,post_tags,post_image,post_filename]

	create_post(post)
end


def create_post(post)
	post_file = File.open(post[4], 'w')
	post_file.write("---\n")
	post_file.write("layout: post\n")
	post_file.write("title: \"#{post[1]}\"\n")
	post_file.write("date: #{post[0]}\n")
	post_file.write("image: #{post[3]}\n")
	post_file.write("tags: #{post[2]}\n")
	post_file.write("---\n\n")
end


gather_header()
