def substrings(string, dictionary)
	my_array = string.split(" ")
	result = Hash.new(0)

	my_array.each do |word|
		dictionary.each do |item|
			if word.downcase.include?(item)
				result[item] += 1
			end
		end
	end
	puts result
end

dictionary = ["below", "down", "go", "going", "horn", "how", "howdy", "it", "i", "low", "own", "part", "partner", "sit"]

substrings("below", dictionary)

substrings("Howdy partner, sit down! How's it going?", dictionary)