module Mastermind

	class Game

		def initialize
			# Greets new player and displays instructions & initializes variables
			@colors = ["Red  ", "Green", "Blue ", "Black", "Red  ", "Green", "Blue ", "Black", "Red  ", "Green", "Blue ", "Black", "Red  ", "Green", "Blue ", "Black"]
			@player_input = Array.new
			@computer_guess = Array.new
			@computer_right_answers = Array.new(4)
			@win = false
			@secret_code
			puts "********************"
			puts "     Mastermind     "
			puts "********************"	
		end

		def questions
			# Asks the player for input for each color position
			position = 1
			4.times do 
				puts "\nType in your color choice for position #{position}."
				input = gets.chomp.downcase
				validate_input(input)
				position += 1
			end
		end

		def validate_input(input)
			# Validates & Formats player input
			case input
			when "red"
				@player_input << "Red  "
			when "green"
				@player_input << "Green"
			when "blue"
				@player_input << "Blue "
			when "black"
				@player_input << "Black"
			else
				puts "Invalid Color. Choose from the colors: Red, Green, Blue and Black."
				input = gets.chomp.downcase
				validate_input(input)
			end
		end

		def display_color_positions
			puts "Colors in the correct position: #{@right_place}"
			puts "Colors in the wrong position:   #{@wrong_place}\n\n"
		end

		def display_input
			puts @player_input.each_slice(4) { |row| puts row.join(" | ") }
		end

		def clues
			# Checks to see if player's input is in the correct place
			# Used to give feedback to the player
			@right_place = 0
			@wrong_place = 0

			# Creates two hashes to count the colors and compare to each other.
			hidden_colors_hash = Hash.new(0)
			@hidden_colors.each { |color| hidden_colors_hash[color] += 1 }

			input_check_hash = Hash.new(0)
			@input_check.each { |color| input_check_hash[color] += 1 }

			ind = 0					# Loops thru each index and compares the colors using the color arrays and counts from the hashes
			begin
				if @hidden_colors.include?(@input_check[ind])
				 	if @hidden_colors[ind] == @input_check[ind]
						@right_place += 1
						@wrong_place -= 1
					elsif @hidden_colors[ind] == "Black"
						if hidden_colors_hash["Black"] >= input_check_hash["Black"]
							@wrong_place += input_check_hash["Black"]
						elsif hidden_colors_hash["Black"] < input_check_hash["Black"]
							@wrong_place = input_check_hash["Black"] - hidden_colors_hash["Black"]
						end
					elsif @hidden_colors[ind] == "Blue "
						if hidden_colors_hash["Blue "] >= input_check_hash["Blue "]
							@wrong_place += input_check_hash["Blue "]
						elsif hidden_colors_hash["Blue "] < input_check_hash["Blue "]
							@wrong_place = input_check_hash["Blue "] - hidden_colors_hash["Blue "]
						end
					elsif @hidden_colors[ind] == "Green"
						if hidden_colors_hash["Green"] >= input_check_hash["Green"]
							@wrong_place += input_check_hash["Green"]
						elsif hidden_colors_hash["Green"] < input_check_hash["Green"]
							@wrong_place = input_check_hash["Green"] - hidden_colors_hash["Green"]
						end
					elsif @hidden_colors[ind] == "Red  "
						if hidden_colors_hash["Red  "] >= input_check_hash["Red  "]
							@wrong_place += input_check_hash["Red  "]
						elsif hidden_colors_hash["Red  "] < input_check_hash["Red  "]
							@wrong_place = input_check_hash["Red  "] - hidden_colors_hash["Red  "]
						end
					end
				end
				ind += 1
			end until ind > 3
			if @wrong_place < 0
				@wrong_place = 0
			elsif @wrong_place > 4
				@wrong_place = 4
			end


		end

		def computer_clues
			# Checks to see if computer's guess is in the correct place
			# Used to give feedback to the player
			@right_place = 0
			@wrong_place = 0

			# Creates two hashes to count the colors and compare to each other.
			player_input_hash = Hash.new(0)
			@player_input.each { |color| player_input_hash[color] += 1 }

			computer_check_hash = Hash.new(0)
			@computer_check.each { |color| computer_check_hash[color] += 1 }

			ind = 0					# Loops thru each index and compares the colors using the color arrays and counts from the hashes
			begin
			 	if @player_input.include?(@computer_check[ind])
			 		if @player_input[ind] == @computer_check[ind] 
						@right_place += 1
						@wrong_place -= 1
						@computer_right_answers.push[ind] = @computer_check[ind]
					elsif @computer_check[ind] == "Black"
						if player_input_hash["Black"] >= computer_check_hash["Black"]
							@wrong_place += computer_check_hash["Black"]
						elsif player_input_hash["Black"] < computer_check_hash["Black"]
							@wrong_place = computer_check_hash["Black"] - player_input_hash["Black"]
						end
					elsif @computer_check[ind] == "Blue "
						if player_input_hash["Blue "] >= computer_check_hash["Blue "]
							@wrong_place += computer_check_hash["Blue "]
						elsif player_input_hash["Blue "] < computer_check_hash["Blue "]
							@wrong_place = computer_check_hash["Blue "] - player_input_hash["Blue "]
						end
					elsif @computer_check[ind] == "Green"
						if player_input_hash["Green"] >= computer_check_hash["Green"]
							@wrong_place += computer_check_hash["Green"]
						elsif player_input_hash["Green"] < computer_check_hash["Green"]
							@wrong_place = computer_check_hash["Green"] - player_input_hash["Green"]
						end
					elsif @computer_check[ind] == "Red  "
						if player_input_hash["Red  "] >= computer_check_hash["Red  "]
							@wrong_place += computer_check_hash["Red  "]
						elsif player_input_hash["Red  "] < computer_check_hash["Red  "]
							@wrong_place = computer_check_hash["Red  "] - player_input_hash["Red  "]
						end
					end
				end
				ind += 1
			end until ind > 3 
			if @wrong_place < 0
				@wrong_place = 0
			elsif @wrong_place > 4
				@wrong_place = 4
			end
		end

		def check_for_win
			# Copies the last four of the @player_input array into a new array
			# and compares it with the @hidden_colors to check for a win
			@input_check = Array.new
			@input_check = @player_input.dup[@player_input.length-4...@player_input.length]
			@input_check.join(" | ")
			if @input_check == @hidden_colors
				@win = true
			else
				@win = false
				clues
			end
		end


		def game_over
			# Ends the current game and asks the player if they would like to play again
			puts "\n\nWould you like to play again? (y/n)"
			input = gets.chomp.downcase
			if input == "y"
				Game.new.play
			else
				puts "Thanks for playing!"
				exit
			end
		end

		def play
			# Asks player for mode and runs accordingly
			puts "\nType 1 to guess the secret code and 2 to make the secret code and have the computer guess."
			mode = gets.chomp
			if mode == "2"
				computer_play
			else
				player_play
			end
			game_over
		end

		def computer_guesses
			# Loop that generates a random color and pushes it into
			# @computer_guess[] and formats and puts it on the screen
			puts "\n\nThe computer has #{@tries} chances remaining."
			indx = 0
			4.times do
				if @computer_right_answers[indx] == nil
					@hidden_colors = @colors.sample
					@computer_guess << @hidden_colors
				else
					@computer_guess << @computer_right_answers[indx]
				end
				puts @computer_guess.each_slice(4) { |row| puts row.join(" | ") }
				indx += 1
				sleep 1		
			end
		end

		def computer_check_for_win
			# Copies the last four of the @computer_guess[] into a new array
			# and compares it with the @player_input to check for a win
			@computer_check = Array.new
			@computer_check = @computer_guess.dup[@computer_guess.length-4...@computer_guess.length]
			@computer_check.join(" | ")
			if @computer_check == @player_input
				@win = true
			else
				@win = false
				computer_clues
			end
		end

		def computer_end
			# Ends the game during the computer guessing phase
			if @win == true
				puts "The computer won, you lose! Better luck next time!"
			else
				puts "You won! The computer did not guess correctly! Great choice!"
			end
			puts "Your secret code was: "
			display_input
			game_over
		end

		def display_computer_guess
			puts @computer_guess.each_slice(4) { |row| puts row.join(" | ") }
		end

		def computer_play
			# Runs thru all 12 tries to guess the color and prints the results to the screen
			questions
			puts "\n\n"
			display_input
			@tries = 12
			begin
				computer_guesses
				display_input
				computer_check_for_win
				display_computer_guess
				display_color_positions
				@tries -= 1
			end until @tries < 0 || @win == true
			computer_end

		end

		def player_play
			# Runs thru all 12 tries to guess the color and prints the results to the screen
			puts "\nInstructions: You have 12 chances to correctly guess the computers code. \nTheir are 4 colors to choose from (Red, Green, Blue and Black).\n\n"
			secret_code
			chances = 12
			begin
				puts "\n\nYou have #{chances} chances remaining."
				questions
				puts "\n\n"
				display_input
				check_for_win
				display_color_positions
				chances -= 1
			end until chances < 0 || @win == true
			player_end
		end

		def player_end
			# Ends the game for the player guess phase
			if @win == true
				puts "Great job! You won!\n\n"
			else
				puts"\n\nGame Over. You ran out of tries! Better luck next time!\n\n"
			end
			puts "The secret code is \n#{@secret_code}"
			game_over
		end

		def secret_code
			# Generates 4 random colors and formats them
			@hidden_colors = @colors.sample(4)
			@secret_code = @hidden_colors.join(" | ")
		end
	end
end

include Mastermind
Game.new.play