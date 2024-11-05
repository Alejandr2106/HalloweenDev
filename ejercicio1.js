function createMagicPotion(potions, target) {
    const potionIndices = new Map();
      
      for (let i = 0; i < potions.length; i++) {
          const requiredPower = target - potions[i];
          
          if (potionIndices.has(requiredPower)) {
              return [potionIndices.get(requiredPower), i];
          }
          
          potionIndices.set(potions[i], i);
      }
      
      return undefined;
  }
  