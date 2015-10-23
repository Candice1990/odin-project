class Caesar

	def initialize(shift)
		alphabet = (('A'..'Z').to_a + ('a'..'z').to_a).join
		i = shift % 26
		@decrypt = alphabet
		@encrypt = alphabet[i..-1] + alphabet[0...i]
	end

	def encrypt(string)
		string.tr(@decrypt, @encrypt)
	end

	def decrypt(string)
		string.tr(@encrypt, @decrypt)
	end

end


begin
puts "Would you like to encrypt or decrypt a message?"
orders = gets.chomp

	if (orders == 'encrypt')
		puts "Enter a message to encrypt: "
		string = gets.chomp
		caesar_cipher = Caesar.new(3)
		puts caesar_cipher.encrypt(string) 
	elsif (orders == 'decrypt')
		puts "Enter a message to decrypt: "
		string = gets.chomp
		caesar_cipher = Caesar.new(3)
		puts caesar_cipher.decrypt(string)
	elsif (orders == 'exit')
		puts "Exiting..."
	else
		puts 'Please try again.'
	end

end until orders == 'exit'