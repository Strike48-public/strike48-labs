# SDK for Rust - Quick Start Tutorial
# Demonstrates creating a new Strike48 connector project

Output ../public/gifs/sdk-quickstart.gif

Require echo

Set FontSize 14
Set Width 1200
Set Height 600
Set Padding 20
Set Theme "Dracula"
Set TypingSpeed 50ms
Set PlaybackSpeed 1.0

# Title card
Type "# Strike48 SDK for Rust - Quick Start"
Sleep 1s
Enter
Enter

# Create new project
Type "cargo new my-connector --bin"
Sleep 300ms
Enter
Sleep 1s

# Show what was created
Type "cd my-connector && ls -la"
Sleep 300ms
Enter
Sleep 1.5s

# Add SDK dependency
Type 'echo "Adding Strike48 SDK dependency..."'
Sleep 300ms
Enter
Sleep 800ms

Type "# Add to Cargo.toml:"
Sleep 300ms
Enter
Type '# strike48-sdk = "0.1.0"'
Sleep 1.5s
Enter
Enter

# Show basic main.rs structure
Type "# Create your connector in src/main.rs"
Sleep 300ms
Enter
Sleep 1s

# Build
Type "cargo build"
Sleep 300ms
Enter
Sleep 2s

# Done
Type "# Your connector is ready! 🚀"
Sleep 2s
